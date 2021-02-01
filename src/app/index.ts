import Generator, { GeneratorOptions } from 'yeoman-generator'

import { commonDevDependencies, dependencyMap, questions } from './constants'
import { IAnswers } from './types'

class MangrovesGenerator extends Generator {
  private answers!: IAnswers

  constructor (args: string | string[], opts: GeneratorOptions) {
    super(args, opts)
  }

  private initializing () {
    this.log('Start generating...')
  }

  private async prompting () {
    this.log('Please answer a few questions:')

    this.answers = await this.prompt(questions)
  }

  private writing () {
    this.log('Copying template files...')

    const { projectName, framework } = this.answers
    const context = { projectName, framework }

    // Set destination root
    this.destinationRoot(`./${projectName}`)

    // Copy common files
    this.fs.copyTpl(
      this.templatePath('common'),
      this.destinationPath(),
      context,
    )

    // Rename .gitignore
    this.fs.move(
      this.destinationPath('_gitignore'),
      this.destinationPath('.gitignore'),
    )

    // Copy corresponding framework files
    this.fs.copyTpl(
      this.templatePath(framework),
      this.destinationPath(),
      context,
    )
  }

  private install () {
    this.log('Installing dependencies...')

    const { framework } = this.answers

    // Install denpendencies
    this.yarnInstall(dependencyMap[framework].dependencies)

    // Install dev denpendencies
    this.yarnInstall(commonDevDependencies.concat(dependencyMap[framework].devDependencies), { dev: true })
  }

  private end () {
    this.log('Finished!')
  }
}

export default MangrovesGenerator
