(ns cryogen.server
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :as route]
            [ring.util.response :refer [redirect resource-response]]
            [ring.util.codec :refer [url-decode]]
            [cryogen-core.watcher :refer [start-watcher!]]
            [cryogen.core :refer [load-all-plugins]]
            [cryogen-core.compiler :refer [compile-assets-timed read-config]]
            [ring.server.standalone :as ring]
            [ring.middleware.reload :refer [wrap-reload]]
            [cryogen-core.io :refer [path]]))

(defn init []
  (load-all-plugins)
  (compile-assets-timed)
  (let [ignored-files (-> (read-config) :ignored-files)]
    (start-watcher! "resources/templates" ignored-files compile-assets-timed)))

(comment

  (init)

  )
