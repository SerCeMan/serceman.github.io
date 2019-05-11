(defproject serce.me "0.1.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring/ring-devel "1.7.1"]
                 [compojure "1.6.1"]
                 [org.jetbrains.kotlin/kotlin-stdlib-jre8 "1.1.1"]
                 [ring-server "0.5.0"]
                 [org.asciidoctor/asciidoctorj "1.5.5"]
                 [cryogen-core "0.1.40"]]
  :plugins [[lein-ring "0.12.5"]
            [lein-exec "0.3.7"]]
  :main cryogen.core
  :aliases {"reload" ["exec" "-ep" "(use 'cryogen.server) (init)"]}
  :ring {:init    cryogen.server/init
         :handler cryogen.server/handler}
  :source-paths ["src"])
