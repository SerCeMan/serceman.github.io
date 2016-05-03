(ns markup.asciidoc
  (:require [cryogen-core.markup :refer [rewrite-hrefs markup-registry]]
            [clojure.string :as s])
  (:import org.asciidoctor.Asciidoctor$Factory
           java.util.Collections
           cryogen_core.markup.Markup
           (java.io BufferedReader)))

(def ^:private ^:static adoc (Asciidoctor$Factory/create))

(defn asciidoc
  "Returns an Asciidoc (http://asciidoc.org/) implementation of the
  Markup protocol."
  []
  (reify Markup
    (dir [this] "asc")
    (ext [this] ".asc")
    (render-fn [this]
      (fn [rdr config]
        (->>
          (.convert adoc
                    (->> (BufferedReader. rdr)
                         (line-seq)
                         (s/join "\n"))
                    (Collections/emptyMap))
          (rewrite-hrefs (:blog-prefix config)))))))

(defn init []
  (prn "INIT")
  (swap! markup-registry conj (asciidoc)))
