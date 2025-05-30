# Next.js Admin Dashboard

A modern, responsive admin dashboard built with Next.js, TypeScript, and Tailwind CSS. Features user management with a multi-step form, search functionality, and smooth animations.

## Features

- **Dashboard Page (`/dashboard`)**
  - Fetch and display users from JSONPlaceholder API
  - Search functionality (filter by name or city)
  - Loading states and error handling
  - Responsive grid layout with user cards
  - Real-time statistics

- **Add User Page (`/dashboard/add`)**
  - Multi-step form with 3 steps:
    1. Basic Information (name, email)
    2. Address Details (street, city, zipcode)
    3. Review & Confirm
  - Form validation using Zod
  - Progress saving to localStorage
  - Smooth animations with Framer Motion
  - Toast notifications

- **Additional Features**
  - Dark/Light mode toggle
  - Responsive design
  - Smooth animations and transitions
  - Form progress persistence
  - Loading spinners and error states
  - Toast notifications for user feedback

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Zod** for form validation
- **React Hooks** for state management

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   ├── add/
│   │   │   └── page.tsx      # Add user form
│   │   └── page.tsx          # Dashboard page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page (redirects to dashboard)
├── components/
│   ├── ErrorMessage.tsx      # Error state component
│   ├── Layout.tsx            # Main layout with navigation
│   ├── LoadingSpinner.tsx    # Loading state component
│   ├── SearchBar.tsx         # Search input component
│   ├── Toast.tsx             # Toast notification component
│   └── UserCard.tsx          # User display card
├── hooks/
│   ├── useLocalStorage.ts    # localStorage hook
│   └── useTheme.ts           # Theme toggle hook
├── lib/
│   └── validation.ts         # Zod validation schemas
└── types/
    ├── form.ts              # Form-related types
    └── user.ts              # User-related types
```

## Key Features Explained

### Multi-Step Form
The add user form is divided into three logical steps:
1. **Basic Info**: Collects name and email with validation
2. **Address**: Collects street, city, and zipcode
3. **Review**: Shows all entered data for confirmation

### State Management
- Uses React's built-in `useState` for component state
- `useLocalStorage` hook for form persistence
- Form data is automatically saved and restored

### Validation
- Real-time validation using Zod schemas
- Clear error messages for invalid inputs
- Step-by-step validation prevents progression with invalid data

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive grid layouts
- Optimized for all screen sizes

### Animations
- Smooth page transitions with Framer Motion
- Animated form steps and user cards
- Loading states and micro-interactions

## API Integration

The dashboard fetches user data from:
```
https://jsonplaceholder.typicode.com/users
```

The add user form simulates API submission by logging data to the console.

## Customization

### Styling
Modify `src/app/globals.css` and Tailwind classes to customize the appearance.

### Validation
Update `src/lib/validation.ts` to modify form validation rules.

### API Endpoints
Replace the fetch URL in `src/app/dashboard/page.tsx` to use your own API.

## Development Notes

- All components are properly typed with TypeScript
- Form state persists across browser sessions
- Error boundaries handle API failures gracefully
- Dark mode preference is saved to localStorage
- Animations are optimized for performance

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled# codingjuniorprj
