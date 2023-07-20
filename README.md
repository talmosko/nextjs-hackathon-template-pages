# Next.js Hackathon Template

<img src="./readme-assets/authhacks.png" />

### [Template Features](#-the-hackathon-template-comes-with-the-following-full-stack-features) 🪐 | [Tech Stack](#-made-with) ✨ | [Setup](#-setup-local-testing) ⚙️ | [Descope](#-descope) 🔑 | [Template Data](#-template-data) 👾 | [Airtable Setup](#-airtable-setup) 📦 | [Gallery](#-gallery) 👨‍🍳

<br />

## 🚀 The Next.js Hackathon Template comes with Next.js 13 and Authentication using NextAuth and Descope. 

## 🪐 The Hackathon template comes with the following full-stack features:

✅ [Descope](https://descope.com) NextAuth authentication 🔐 <br/>
✅ Protected pages & API routes with NextAuth. <br/>
✅ The latest Next.js app router, API routing protocols, and NextAuth integrations. <br/>
✅ A fully and easily customizable Home screen which features an About, Speakers, Sponsors, and FAQ section. <br/>
✅ A dedicated Team page to showcase all contributors.  <br/>
✅ A Dashboard page for Hackers to complete onboarding forms, acceptance status, and hackathon announcements. <br/>
✅ Fully responsive UI (mobile, tablet, computer). <br/>
✅ Airtable backend for hackers to signup and view hackathon details. <br/>

## ✨ Made with... 

- NextAuth (Auth.js) using Descope provider
- Flowbite
- Tailwind CSS

## ⚙️ Setup: Local Testing

1. In the root directory of the project, copy the `.env.example` to `.env` by running `cp .env.example .env` and include the following:

```
NEXTAUTH_SECRET="<YOUR_NEXTAUTH_SECRET>"
NEXTAUTH_URL="<WHERE SERVER IS HOSTED (e.g. https://localhost:3000)>"

DESCOPE_PROJECT_ID="<YOUR_DESCOPE_PROJECT_ID>"
DESCOPE_ACCESS_KEY="<YOUR_DESCOPE_ACCESS_KEY>"
```

- `DESCOPE_PROJECT_ID` - can be found in your Descope's account under the [Project page](https://app.descope.com/settings/project)  
- `DESCOPE_ACCESS_KEY` - can be generated in your Descope's account under the [Access Keys page](https://app.descope.com/accesskeys)  
- `NEXTAUTH_SECRET` can be generated by the following command in your terminal: 
```
$ openssl rand -base64 32
```

2. Installation

- `npm install`
- `npm run dev`
- Open `http://localhost:3000` in your browser

## 🔑 Descope 

Descope is expected to be published as a NextAuth provider in the following months. <br />
In the mean time, we can implement a custom provider which is as easy to implement! 

Out NextAuth options can be found in ```/app/_utils/options.ts```.  

In our ```authOptions``` we have our custom Descope provider we have attributes such as your ```clientID``` (Descope project id), ```clientSecret``` (Descope access key), and ```wellKnown``` set to Descope's OpenID Connect configuration which contains our authorization endpoints and authentication data.

```
import { NextAuthOptions } from "next-auth"


export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: `https://api.descope.com/${process.env.DESCOPE_PROJECT_ID}/.well-known/openid-configuration`,
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      clientId: process.env.DESCOPE_PROJECT_ID, 
      clientSecret: process.env.DESCOPE_ACCESS_KEY,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    },
  ]
}
```

Then in our ```/app/api/auth/[...nextauth]/route.ts``` we pass our authOptions and intialize NextAuth.
```
import NextAuth from "next-auth/next";
import { authOptions } from "../../../_utils/options";


const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }
```

That's it! 

## 👾 Template Data
 
The template data can be found in the ```./app/_template_data``` 

<img width="250" src="./readme-assets/template_data.png" />

All the template data can be customized and found in the following files. <br />

To see our template data in action make your way to ```app/page.tsx```. <br />
In the ```page.tsx``` we import the different template data and the components from our ```_components``` folder. We pass in 
our template data into these components as props that then render the data! 

## 📦 Airtable Setup 

> **_NOTE:_**  This step is Optional!

To learn more about creating a form and setting up Airtable as a database go to [Airtable.md](Airtable.md)! 

## 👨‍🍳 Gallery

<img src="./readme-assets/authhacks_1.png" />
<img src="./readme-assets/authhacks_2.png" />
<img src="./readme-assets/authhacks_3.png" />
<img src="./readme-assets/authhacks_4.png" />
<img src="./readme-assets/authhacks_5.png" />
<img src="./readme-assets/authhacks_6.png" />
<img src="./readme-assets/team.png" />
<img src="./readme-assets/accepted_1.png" />
<img src="./readme-assets/accepted_2.png" />
<img src="./readme-assets/application_pending.png" />
<img src="./readme-assets/signup.png" />

<br />
<br />

## Made with ☕ + 💙