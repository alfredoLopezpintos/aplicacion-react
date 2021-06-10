# Contributing

This is a privately managed repository. By participating in this project, you agree to abide by the code of conduct from the [Contributor Covenant], version 1.4. 

[Contributor Covenant]: http://contributor-covenant.org/version/1/4

When contributing , please first discuss the change you wish to make via issue, email, pull request or any other method with the owners of this repository before making a change.

## Branch names

This project follows the default branch names from Gitflow. If you want to know more, please follow the link: [Gitflow default branching names]

1. Production branch: `main/`
2. Development branch: `develop/`
3. Branch prefixes: `feature/`
4. Bugfix branch: `bugfix/`
5. Release branch: `release/`
6. Hotfix branch: `hotfix/`
7. Support branch: `support/`

[Gitflow default branching names]: https://zellwk.com/blog/git-flow

## Code review dynamics

Every contributor will have to agree on merging new changes. Some contributions may not be agreed upon github platform itelsef.

## Git merge strategy

We will always merge to `develop` first. And when it's ready, to the `main` branch. Avoiding merging as possible.

We will be using the "Recursive" merge strategy, where we won't work on the `main` branch until the app is ready to production.
The work flow will be divided on the `feature` branch, for each feature we are working on; for later merging it to the `develop`
branch, where all the features will be united and, finally, merging to `main`.

## Pull Request Process

### To start coding a new feature, you must create a new local branch:

    git flow feautre start nameNewFeature

### Once finish coding the new feature, it’s time to push the new branch to the GitHub repository:

    git push --set-upstream origin feature/nameNewFeature

### Submit a pull request

We do not guarantee your contributions will be added to this repository. Please take this into account before making any changes.

Some things that will increase the chance that your pull request is accepted:

* Write tests.
* Follow our [style guide].
* Write a good [commit message].

[style guide]: https://github.com/airbnb/javascript/tree/master/react
[commit message]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

### After the pull request is acepted and merged to the develop remote branch, you can finish the feautre on your local branch:

    git flow feautre finish nameNewFeature
