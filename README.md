# Blinqpay Landing Page

Responsive landing page implementation based on Figma design.

## Архітектура

```text
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   │   └── background/
│   │   └── styles/
│   │       ├── index.css  # Global variables and resets
│   │       └── App.css    # Utility classes
│   ├── components/
│   │   ├── ui/            # Reusable components (Buttons, Cards)
│   │   └── layout/        # Header, Footer, Hero, Sections
│   ├── utils/             # Helper functions
│   ├── App.jsx            # Main App layout
│   └── main.jsx           # Entry point
└── .env
```

## Технології

- **React** + **Vite**
- Глобальні CSS змінні (`:root`)
- Шрифт: **Inter** (Google Fonts)
