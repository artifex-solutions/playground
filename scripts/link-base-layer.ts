import { symlink } from 'node:fs/promises'
import { downloadTemplate } from 'giget'
import chalk from 'chalk'
import { PRUVIOUS_BASE_REPO, PRUVIOUS_BASE_TARGET } from './constants'

const { log, error } = console

const { PRUVIOUS_BASE_PATH } = process.env

if (PRUVIOUS_BASE_PATH) {
	//* SYMLINK IF DEV ENV VAR IS SET

	log(
		chalk.bold('Symlinking base layer:'),
		chalk.blue(`${PRUVIOUS_BASE_PATH} --> ${PRUVIOUS_BASE_TARGET}`)
	)

	try {
		await symlink(PRUVIOUS_BASE_PATH, PRUVIOUS_BASE_TARGET, 'dir')
	} catch (err) {
		if ((err as { errno: number }).errno === -17) {
			log(PRUVIOUS_BASE_TARGET, 'already exists.')
			process.exit()
		}

		error('PRUVIOUS_BASE_PATH', `(${PRUVIOUS_BASE_PATH})`, 'is not a valid path.')
	}
} else {
	//* DOWNLOAD GIT REPO IN PROD

	log(chalk.bold('Downloading base layer from:'), chalk.blue(PRUVIOUS_BASE_REPO)) // TODO: add a version tag as a const or env var

	const { dir } = await downloadTemplate(PRUVIOUS_BASE_REPO, {
		dir: PRUVIOUS_BASE_TARGET,
		forceClean: true,
		provider: 'github',
	})

	log(chalk.bold('Base layer saved in:'), chalk.blue(dir))
}
