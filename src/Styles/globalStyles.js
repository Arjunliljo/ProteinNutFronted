import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --primary:#5c8e55;
    --light-green:#cbdd63;
    --yellow:#f1d371;
    --dark-yellow:#e9a96b;
    --light-yellow:#fdf3c6;

    --white:#f3f1e8;
    --font-gray:#343a4a;
    --gray:#93969e;

    --radius-tiny:2px;
    --radius-sm:5px;
    --radius-md:8px;
    --radius-lg:4rem;
}
    
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    /* transition: all 0.3s ease; */
}

 html{
  font-size: 10px;
 }

 body{
  font-family: "SUSE", sans-serif;
 }

`;

export default GlobalStyles;
