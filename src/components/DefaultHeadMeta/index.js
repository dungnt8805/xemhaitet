import React, { PropTypes } from "react"
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { property: "fb:app_id", content: "1625144991086588" },
        { property: "fb:admins", content: "730276762" },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        { name: "ROBOTS", content: "noindex" },
        { name: "google-site-verification", content: "ISeO_0rnNXeSwn5ux4ISyBRPARLxtznOso-GQxC9nrs" },
        { name: "X-UA-Compatible", content: "IE=edge" },
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js", type: "text/javascript" },
        { src: "//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", type: "text/javascript" },
        { src: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js", type: "text/javascript" },
        { src: "https://content.jwplatform.com/libraries/tSX7kjta.js" },
        { src: "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8" },
      ] }
      link={ [
        { href: "/images/favicon/favicon.ico", rel:"shortcut icon", type: "image/x-icon" },
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
