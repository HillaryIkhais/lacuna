"use strict";

import { join as pathJoin } from "path";
import { Studio } from "remotion";
import RootComposition from "./composition.js";

const Root = () => (
  <Studio
    sourceRoot={pathJoin(process.cwd(), "src")}
    iframeWrapper={(props) => <>{props.children}</>}
  >
    <RootComposition />
  </Studio>
);

export default Root;
