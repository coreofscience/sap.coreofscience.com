import React from 'react';
const COPYIMAGE = `
<svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)" fill="#5B5B5B">
    <path d="M10.999 0C8.844-.039 6.798 1.568 6.293 3.656 3.538 3.608 1.176 6.31 1.499 9.03c.012 3.867-.026 7.734.02 11.6.21 2.616 2.828 4.688 5.418 4.37 2.62-.033 5.245.076 7.86-.061 1.853-.298 3.461-1.77 3.911-3.594 2.755.047 5.116-2.657 4.793-5.376-.012-3.866.026-7.733-.02-11.599-.21-2.629-2.845-4.693-5.444-4.37h-7.04H11zm0 2.5c2.71.026 5.426-.054 8.134.042C20.72 2.818 21.22 4.589 21 5.979c-.025 3.709.058 7.425-.044 11.128-.066 1.1-2.45 2.516-2.091.61-.019-3.295.056-6.594-.045-9.887-.311-2.547-2.885-4.488-5.418-4.176H9.003c.403-.697 1.185-1.169 1.995-1.154zM6.362 6.153c2.712.027 5.428-.053 8.136.043 1.586.276 2.085 2.048 1.867 3.438-.022 3.665.053 7.335-.04 10.999-.299 1.694-2.215 2.078-3.658 1.866-2.267-.019-4.537.05-6.801-.04-1.586-.277-2.084-2.05-1.867-3.44.022-3.655-.05-7.315.038-10.968.188-1.08 1.228-1.936 2.325-1.899v.001z"/>
    <path d="M6.803 8.998c-2.017.104-1.222 2.928.466 2.501 2.18-.016 4.362.032 6.539-.024 1.795-.406.817-2.9-.777-2.476H6.802h.001zM6.803 13.16c-2.017.104-1.221 2.928.466 2.5h6.295c2.09-.125 1.222-2.972-.467-2.5H6.803zM6.803 17.324c-2.016.104-1.222 2.925.466 2.499h4.397c2.278-.32.945-2.963-.735-2.5H6.803z"/>
  </g>
  <defs>
    <clipPath id="clip0">
      <path fill="#fff" d="M0 0h25v25H0z"/>
    </clipPath>
  </defs>
</svg>
`;

const CopyImage = ({ ...props }) => (
  <img
    src={`data:image/svg+xml;base64,${btoa(COPYIMAGE)}`}
    alt='core of science logo'
    {...props}
  />
);

export default CopyImage;
