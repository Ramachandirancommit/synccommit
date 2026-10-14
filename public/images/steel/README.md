# Anas Steel images

This folder contains original sample SVG illustrations that can remain in this application permanently.

Add your own photographs here and update the paths in `src/config/steel.js`. Paths start with `/images/steel/`, without `public`. For example: `/images/steel/tmt-bars.jpg`.

- `warehouse.svg`: slider and introduction artwork; also used for infrastructure. To use different photographs, edit the corresponding `SteelImage` paths in `src/pages/AnasSteelPage.jsx`.
- `tmt-bars.svg`, `plates.svg`, `pipes.svg`, `sections.svg`, `coils.svg`, `rods.svg`: product artwork, also reused in sample application cards.

Company contact information, hours, address, map URL, statistics, certifications, clients, testimonials, and jobs are configured in `src/config/steel.js`. Use confirmed details only. The map URL opens a real map in another tab once configured; the initial graphic is an illustrative placeholder.

The page contains all 22 requested modules. The slider is manually controlled, material categories are filterable, and the quote form validates and downloads an enquiry text file. It does not send enquiries or store personal information. Connect a real submission service separately if online delivery is needed.
