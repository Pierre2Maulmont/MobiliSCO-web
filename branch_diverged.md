$ git status
On branch master
Your branch and 'origin/master' have diverged,
and have 3 and 3 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   journal.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   questions.md


kolel@DESKTOP-6TQRVF0 MINGW64 ~/MobiliSCO-web/doc (master)
$ git add questions.md

kolel@DESKTOP-6TQRVF0 MINGW64 ~/MobiliSCO-web/doc (master)
$ git status
On branch master
Your branch and 'origin/master' have diverged,
and have 3 and 3 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   journal.md
        modified:   questions.md


kolel@DESKTOP-6TQRVF0 MINGW64 ~/MobiliSCO-web/doc (master)
$ git log
commit 12abb2d3debcb7dab83485747de87dfd93fddb95 (HEAD -> master)
Author: Pierre de MAULMONT <pierre.de-maulmont@ac-paris.fr>
commit 12abb2d3debcb7dab83485747de87dfd93fddb95 (HEAD -> master)
Author: Pierre de MAULMONT <pierre.de-maulmont@ac-paris.fr>
Date:   Wed Jan 30 11:26:04 2019 +0100

    modifié Notes sur github avec un add seulement sur ce md

commit a5323327e7b8cc6692c89415f5b9749473bb84d5
Author: Pierre de MAULMONT <pierre.de-maulmont@ac-paris.fr>
Date:   Sun Jan 27 21:14:22 2019 +0100

    test d'un commit sur modification du journal.md, par ADD, et non sur les autres docs

commit 293fbdcee2c83491f55fdb85ee2a37013e7bad40
Author: Pierre de MAULMONT <pierre.de-maulmont@ac-paris.fr>
Date:   Sat Jan 26 14:14:06 2019 +0100

    mis à jour questions.md et fier d'avoir trouvé tout seul des  réponses !

commit 3cd20d16e062ce07276000c815bce9bebd115caf
Author: Pierre de MAULMONT <pierre.de-maulmont@ac-paris.fr>
Date:   Sat Jan 26 13:54:33 2019 +0100

    mis à jour journal, questions, notes sur github

commit b262fb847462167f27e03af879220833f627b8fb
Author: Pierre de MAULMONT <pierre.de-maulmont@ac-paris.fr>
Date:   Tue Jan 22 14:06:22 2019 +0100

    journal relu et mis en forme

commit 2f99ac54c0ad4dcaef8003db2198354306019f7a
Author: Pierre de MAULMONT <Pierre.De-Maulmont@ac-paris.fr>
Date:   Mon Jan 21 17:06:48 2019 +0100

    rédigé une proposition de valeur initiale

commit b7a815522190feb58050390f1223d1201f404b2b
Author: Pierre de MAULMONT <Pierre.De-Maulmont@ac-paris.fr>
Date:   Mon Jan 21 15:42:28 2019 +0100

    rédigé irritants dans le README

commit 17a8f0365ba37313f217e710e68f5b3a37e0abbf
Author: Pierre de MAULMONT <pierre.de-maulmont@ac-paris.fr>
Date:   Mon Jan 21 14:43:24 2019 +0100

    continué à remplir le journal

commit 33428969b52907b300661c1d0376be722eaa3206
Author: Pierre de MAULMONT <pierre.de-maulmont@ac-paris.fr>

kolel@DESKTOP-6TQRVF0 MINGW64 ~/MobiliSCO-web/doc (master)
$ pwd
/c/Users/kolel/MobiliSCO-web/doc

kolel@DESKTOP-6TQRVF0 MINGW64 ~/MobiliSCO-web/doc (master)
$ ls
journal.md  questions.md

kolel@DESKTOP-6TQRVF0 MINGW64 ~/MobiliSCO-web/doc (master)
$ git commit -m"modifié questions.md"
[master 07571cc] modifié questions.md
 2 files changed, 27 insertions(+), 5 deletions(-)

kolel@DESKTOP-6TQRVF0 MINGW64 ~/MobiliSCO-web/doc (master)
$ git status
On branch master
Your branch and 'origin/master' have diverged,
and have 4 and 3 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Changes to be committed:

        modified:   ../README.md
        new file:   ressources.md

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:   questions.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   ../Notes_Github.md


kolel@DESKTOP-6TQRVF0 MINGW64 ~/MobiliSCO-web/doc (master|MERGING)
$ git pull origin master
error: Pulling is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.

kolel@DESKTOP-6TQRVF0 MINGW64 ~/MobiliSCO-web/doc (master|MERGING)
$
