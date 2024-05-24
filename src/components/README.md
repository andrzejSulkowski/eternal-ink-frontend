# Atoms

Atoms are the basic building blocks of your application. They are the smallest and most fundamental components that cannot be broken down any further. Each atom represents a single UI element, such as a button, input field, label, or icon.

## Examples of Atoms:
- Button
- Input
- Label
- Icon
- Spinner

## Guidelines:
1. **Single Responsibility**: Each atom should do one thing and do it well. It should be a single piece of UI with no complex functionality.
2. **Reusable**: Atoms should be designed to be reused throughout the application.
3. **Style**: Keep styles scoped and minimal. Use CSS modules or styled-components to encapsulate styles.

## Directory Structure:
atoms/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   └── Button.module.css
├── Input/
│   ├── Input.tsx
│   ├── Input.test.tsx
│   └── Input.module.css
└── …

Place all your atomic components inside this directory following the structure above.


# Molecules

Molecules are slightly more complex components composed of multiple atoms. They are groups of atoms bonded together to form a functional unit. Molecules can manage their own state and handle simple interactions.

## Examples of Molecules:
- Form Field (combination of label, input, and error message)
- Button Group
- Card (combination of image, title, and description)
- Nav Item (combination of icon and text)

## Guidelines:
1. **Composition**: Molecules should be composed of multiple atoms or even other molecules.
2. **Reusable**: Design molecules to be reusable throughout the application.
3. **Encapsulate Behavior**: Molecules can manage their own state and encapsulate simple interactions.

## Directory Structure:
molecules/
├── FormField/
│   ├── FormField.tsx
│   ├── FormField.test.tsx
│   └── FormField.module.css
├── ButtonGroup/
│   ├── ButtonGroup.tsx
│   ├── ButtonGroup.test.tsx
│   └── ButtonGroup.module.css
└── …

Place all your molecular components inside this directory following the structure above.

# Organisms

Organisms are complex components composed of multiple molecules and/or atoms. They form distinct sections of an interface and encapsulate a higher level of functionality. Organisms can manage more complex interactions and state.

## Examples of Organisms:
- Header (combination of logo, nav items, and search bar)
- Footer (combination of contact info, links, and social media icons)
- Hero Section (combination of title, subtitle, button, and background image)
- Form (combination of multiple form fields and buttons)

## Guidelines:
1. **Complex Composition**: Organisms should be composed of multiple molecules and/or atoms.
2. **Encapsulate Complex Behavior**: Organisms can manage complex interactions and state.
3. **Reusable Sections**: Design organisms to be reusable sections of the application.

## Directory Structure:

organisms/
├── Header/
│   ├── Header.tsx
│   ├── Header.test.tsx
│   └── Header.module.css
├── Footer/
│   ├── Footer.tsx
│   ├── Footer.test.tsx
│   └── Footer.module.css
└── …

Place all your organism components inside this directory following the structure above.