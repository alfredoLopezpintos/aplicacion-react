# Contributing

We love pull requests from everyone. By participating in this project, you agree to abide by the code of conduct from the [Contributor Covenant], version 1.4. 

[Contributor Covenant]: http://contributor-covenant.org/version/1/4

When contributing to this repository, please first discuss the change you wish to make via issue, email, pull request or any other method with the owners of this repository before making a change.

## Pull Request Process

### To start coding a new feature, you must create a new local branch:

    git flow feautre start nameNewFeature

### Once finish coding the new feature, it’s time to push the new branch to the GitHub repository:

    git push --set-upstream origin feature/nameNewFeature

### Submit a pull request

At this point you're waiting on us. We like to at least comment on pull requests within three business days (and, typically, one business day). We may suggest some changes or improvements or alternatives.

Some things that will increase the chance that your pull request is accepted:

* Write tests.
* Follow our [style guide].
* Write a good [commit message].

[style guide]: https://github.com/airbnb/javascript/tree/master/react
[commit message]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

### After the pull request is acepted and merged to the develop remote branch, you can finish the feautre on your local branch:

    git flow feautre finish nameNewFeature
