# MAHDI coaching

French and Arabic coaching site. The coach is Mahdi. The supplied prices are unchanged: 25,000 DZD / 1 month, 45,000 DZD / 2 months, 60,000 DZD / 3 months. Every formula presents training, food guidance, supplement discussion and coaching. No qualifications, testimonials or before/after results are invented.

## Activation

WhatsApp `213540423218` and email `mehdi.coaching07@gmail.com` are configured in `coach-config.js`. The two supplied certificates (musculation and fitness) are available in the bilingual certificate gallery. Their original scans were converted to JPEG for browser display. The supplied original Mahdi portrait is used in the hero and coach card; both certificates are visible in-page before pricing and can be enlarged.

`paymentUrl` is optional and accepts an HTTPS payment link from the coach's actual payment provider. It is a link, not a built-in card processor. Confirm the payment method, terms and the supplied service descriptions with the coach before taking payments.

## Request flow

Visitors select a plan and goal, fill the enquiry, accept contact consent and review their message. With valid configured contacts, buttons open WhatsApp and a mail application with the prepared message. The visitor must send it in that application. No email or WhatsApp is sent automatically, and no enquiry data is stored on the site. With missing contacts the request can be copied, and the page says the contact details are pending. The visitor can send requests to the configured WhatsApp or email. The payment provider link remains unconfigured; the site does not process payments.

## Structure

- `index.html`: visitor experience.
- `styles.css`: responsive layout, RTL and reduced-motion support.
- `app.js`: language, goals, plan selection, validation, message review, clipboard and original diploma viewer.
- `coach-config.js`: real coach details.
- `mahdi-coach.webp`: supplied original portrait of Mahdi.
- `diploma-musculation.jpg`, `diploma-fitness.jpg`: supplied certificate scans.
- `training.jpg`: unused earlier stock image.

The repository root is the static deployment output. No build dependencies are required.

## Image source

Stock training photo by Samuel Girven on Unsplash:
https://unsplash.com/photos/a-man-lifting-a-dumbbell-in-a-gym-rFuPln3EARk
Original downloaded asset:
https://images.unsplash.com/photo-1704223523321-7b0b44a1a0b9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=85&w=2200
Licensed under the Unsplash License: https://unsplash.com/license

## Vercel

Import this repository into Vercel. Keep the repository root as Root Directory. `vercel.json` selects the Other/static preset. The static files are at the repository root. No build or install command is required. The site has no framework and no backend dependencies.
