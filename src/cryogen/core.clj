(ns cryogen.core
  (:require [cryogen-core.compiler :refer [compile-assets-timed]]
            [cryogen-core.plugins :refer [load-plugins load-plugin]]))

(defn load-all-plugins []
  (doseq [plugin ["markup"]]
    (load-plugin (str "src/" plugin "/plugin.edn")))
  (load-plugins))

(defn -main []
  (load-all-plugins)
  (compile-assets-timed)
  (System/exit 0))
