import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-crawler',
  templateUrl: './crawler.component.html',
  styleUrls: ['./crawler.component.scss']
})
export class CrawlerComponent implements OnInit{

  runInst = `cd <path-to-this-repository>
cd src/crawler/

#compile Repository Crawler
javac -classpath .:jcabi-github-0.41-jar-with-dependencies.jar:org.eclipse.jgit-5.3.0.201903130848-r.jar RepositoryMiner.java

#run Repository Crawler
java -classpath .:jcabi-github-0.41-jar-with-dependencies.jar:org.eclipse.jgit-5.3.0.201903130848-r.jar RepositoryMiner`
  cleanInst = `cd <path-to-this-repository>
cd src/crawler/
mv cleanRepository.sh ./cloned_repos
cd cloned_repos/
chmod +x cleanRepository.sh
sh cleanRepository.sh`

  constructor() {}

  ngOnInit() {}
}
