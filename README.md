# SyncCommit Technologies

Responsive website frontend for SyncCommit Technologies at synccommit.com. Built with React and Vite.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run start
```

Vite prints the local URL when ready (normally `http://localhost:5173`). Stop the server with `Ctrl+C`. Run `npm run build` to create a production bundle in `dist/` and `npm run preview` to preview that bundle.

## Pages

- `/` — Home
- `/about` — About
- `/projects` and `/projects/:projectId` — Searchable project directions and details
- `/services` — Services and process
- `/vision-mission` — Vision and mission
- `/ecosystem` — Technology ecosystem
- `/achievements` — Verified achievements (honest empty state until supplied)
- `/upcoming-projects` — Confirmed announcements (honest empty state until supplied)
- `/team` — Team and collaboration
- `/events` — Conferences and meetups with upcoming/past views
- `/careers` and `/careers/:jobId` — Opening list, filters, details, and introduction form
- `/contact` — Contact enquiry form
- `/privacy` and `/terms` — Draft documents requiring owner review
- Unknown paths — Not found page

The frontend includes responsive navigation, keyboard-visible focus, reduced-motion handling, a pausable illustration carousel, filters, detail breadcrumbs, native form validation, and original locally-created SVG illustrations in `public/images/`. Replace abstract illustrations with approved SyncCommit photography by editing their paths and alt text in `src/config/content.js`. Confirmed company facts, people, events, achievements, jobs, and project announcements are centralized there.

## Preview limitations

Contact and careers forms are local demonstrations: valid input displays “Validated locally; not sent.” Data is not sent or stored. No backend, job submission service, authentication, upload handling, or production privacy/terms approval is configured. Sample project directions are explicitly labeled concepts and must not be represented as delivered work. Technology names are ecosystem references, not partnership claims. App Store and Google Play links are omitted until real listing URLs are configured. No hosting provider or DNS has been configured.
