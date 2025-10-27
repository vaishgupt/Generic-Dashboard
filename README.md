# Modern Dashboard Application

A modern dashboard application built with Next.js, TypeScript, and Shadcn/UI components featuring data visualization, user management, and responsive design.

## Features

- 📊 Interactive Charts (Area, Bar, Line, Pie) using Recharts
- 🎨 Dark/Light Theme Support
- 📱 Responsive Layout
- 📋 Data Tables with Sorting and Pagination
- 👤 User Management
- 🔄 Real-time Updates
- 🎯 Todo Management
- 📊 Payment Analytics

## Tech Stack

- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Static Type Checking
- [Shadcn/UI](https://ui.shadcn.com/) - UI Components
- [Recharts](https://recharts.org/) - Chart Components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide Icons](https://lucide.dev/) - Icons

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
my-app/
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── payment/         # Payment module
│   └── users/          # User management module
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   └── providers/      # Context providers
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
└── public/            # Static assets
```

## Key Components

- `AppAreaChart`, `AppBarChart`, `AppLineChart`, `AppPieChart`: Visualization components
- `TablePagination`: Reusable table pagination component
- `EditUser`: User management form
- `AppSidebar`: Navigation sidebar
- `TodoList`: Task management component

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
