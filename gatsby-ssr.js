import React from "react";
import { FormspreeProvider } from "@formspree/react";

export const wrapRootElement = ({ element }) => (
	<FormspreeProvider project={process.env.GATSBY_FORMSPREE_PROJECT_ID}>
		{element}
	</FormspreeProvider>
);
