(ns markup.asciidoc
  (:require [cryogen-core.markup :refer [rewrite-hrefs markup-registry]]
            [clojure.string :as s])
  (:import org.asciidoctor.Asciidoctor$Factory
           org.asciidoctor.Asciidoctor
           java.util.Collections
           cryogen_core.markup.Markup
           (java.io BufferedReader)
           (org.asciidoctor OptionsBuilder SafeMode)))

(def ^:private ^:static adoc (Asciidoctor$Factory/create))
(prn "version: " (.asciidoctorVersion adoc))

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
                    (-> (OptionsBuilder/options)
                        (.safe SafeMode/UNSAFE)))
          (rewrite-hrefs (:blog-prefix config)))))))

(defn init []
  (prn "INIT")
  (swap! markup-registry conj (asciidoc)))
