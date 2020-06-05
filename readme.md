Notes from thenewboston git tutorial
(see also http://41j.com/blog/2015/02/common-git-screwupsquestions-solutions/)

The Git bash shell is like any other linux/unix shell, so 
```
$ pwd prints the working directory, 
$ cd ~ changes to the home directory, 
$ ls -la lists all files including hidden ones, etc. 
$ clear clears the screen
$ [up arrow] shows previous command
```

Setting up
```
$ git config --global user.email "you@example.com"
$ git config --global user.name "Your Name"
```

Initialize an empty repo in the current directory
```
$ git init
```

Add all directory changes to the project staging area
(working file>>staging area>>repo)
```
$ git add .
```

Add a single file to the project staging area
```
$ git add aSingleFile.txt
```

Commit the changes from staging area to repo
```
$ git commit -m "message here"
```

Add changed files to staging area and commit them
```
$ git commit -am "message here" (don't use this if changes include new, deleted, or moved files)
```

Compare repo and working directory
```
$ git status
```

View commit history
```
$ git log
$ git log --oneline 
```

See differences between unstaged files in the working directory and repo
```
$ git diff
```

To see changes between current file and most recently committed one:
```
$ git diff HEAD -- <filename.txt>
```

See differences between staged files and repo
```
$ git diff --staged
```

Delete a file
```
$ git rm aFileName 
$ git commit
```
(rm removes file in working directory and puts the change in staging area ... must still commit)

Rename or move a file (within working directory)
```
$ git mv oldFileName newFileNameOrPath
$ git commit
```
(mv moves/renames file in working directory and puts the change in staging area ... must still commit)

MERGE CONFLICTS
1. View the merge conflict:
```
<<<HEAD
  (portion of code on head, i.e., new addition)
====
  (portion on last committed change, i.e., old version)
>>>>9d9c62
```

2. Manually fix and save, then:
```
$ git add --all
$ git commit -m "message"
```



HELP! I tried something, it didn't work. I just want to go back
where it was:

I changed test.txt. I saved it, but it has not yet been added (staged) or committed:

```
$ git reset HEAD aFileName
```

Or

```
$ git checkout test.txt
$ git checkout HEAD test.txt //same thing
```

I changed test.txt, saved it, and committed it: 
```
$ git commit -m "This is a commit I want to get rid of"
```
Now I want to "undo" this last commit, in a way that the original commit and the "undoing" commit are visible in history:
```
$ git revert HEAD
```

Reset all files to previous commit

```
$ git reset --hard abcd
```

will move everything back to the condition it was at commit abcd, more or less erasing the intervening commits. This only works for rolling back to commits on the same branch.

I want to go back to the way things were after commit abc123 but still have everything safely reflected in my log:

```
$ git reset --hard abc123
$ git reset --soft HEAD@{1}
$ git commit -m "back to good point with new commit"
```
[Result:
```
git log --oneline
```
`bb77 back to good point with new commit`
`2c7f bad commit`
`abc1 way things were`

So, if necessary you can still reset back to the screwed up stuff. Remember,

``` 
$ git log --all 
```
let's you see everything that's been done]



Works with Magic Time Machine, too:
```
$ git reflog
# you will see a list of every thing you've done in git, across all branches!
# each one has an index HEAD@{index}
# find the one before you broke everything
$ git reset --hard HEAD@{index}
$ git reset --soft HEAD@{1}
$ git commit -m "I just reset to previous commit"
```

Another option, if you wanted to go back to commit abc123 and not worry about detaching HEADS:
`$git checkout -b test-branch abc123  //creates and checks out a new branch, starting with commit abc123`
`...look at commit abc123, do stuff with it, whatever ... when you want to get rid of it:`
`$git checkout master`
`$git branch -d test-branch //deletes new branch`

Remove what was done during a particular commit:
```
$ git revert <SHA of commit you want to discard>
$ git commit -am "After revert"
```



Clone existing GitHub repository
[cd to desired location]

```
$ git clone https://github.com/acolburn/notes.git Notes
```

where Notes is a folder to hold files

After creating a GitHub repository, to push an existing repository

```
$ git remote add origin https://github.com/acolburn/notes.git
$ git push -u origin master
```
(first line makes "origin" short version for URL we're pushing to, a repo called "notes")
(second line pushes everything)




## TYPICAL WORKFLOW
```
$ git init 
$ git add .
$ git git commit -m "initial commit" //create repo, stage files, initial commit
$ git commit -am "message" //commit changes
$ git tag v1.0 -m "tagging as version 1.0"
$ git branch //see list of branches
$ git branch new-branch //make new-branch
$ git checkout new-branch //switch to new-branch
$ git checkout master //switch back to master
$ git merge new-branch //merge new-branch into master
(optional: $ git branch -d new-branch //deletes new-branch)

```
