(defproject serce.me "0.1.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [ring/ring-devel "1.4.0"]
                 [compojure "1.5.0"]
                 [ring-server "0.4.0"]
                 [org.asciidoctor/asciidoctorj "1.5.4"]
                 [cryogen-core "0.1.40"]]
  :plugins [[lein-ring "0.9.7"]]
  :main cryogen.core
  :ring {:init    cryogen.server/init
         :handler cryogen.server/handler}
  :source-paths ["src"])
