- Ref
  - https://sparql.gtf.fyi/
  - https://github.com/gtfierro/rdf-ui
  - https://www.ruby-lang.org/ja/libraries/

```bash
# Clean Up
$ docker ps -a | awk '{print $1}' | tail -n+2 | xargs -I@ bash -c 'docker stop @ && docker rm @'

#エンドポイントだけ立てたいとき
$ docker run -p 7878:7878 oxigraph/oxigraph

#事前にデータ配備したいとき
$ docker run --rm -v $PWD/data:/data -p 7878:7878 oxigraph/oxigraph --location /data serve --bind 0.0.0.0:7878
```

一括データロード
```bash
#https://github.com/ruby-rdf/json-ld
$ sudo gem install json-ld

#https://github.com/ruby-rdf/sparql-client
$ sudo gem install sparql-client

$ ruby ./load.rb
```
