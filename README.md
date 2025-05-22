# Sacred-Bestiary
Next js 15
Behold! Thou art presented with a sacred challenge, a test of thy skills not with the ancient tongues of Python, but with the modern decrees of Next.js 15, Server Actions, and the divine wisdom of TypeScript! We seek not merely those who can commune with external spirits (APIs), but those who can gather, validate, store, and recall the knowledge from the very foundations of our digital realm. Prepare thyself for a task of import, revealed in a style befitting the grandeur of SpaceCode Studios!

The Grand Task: Building the Sacred Bestiary
Hark, applicant! Thou art tasked with constructing a digital compendium, a bestiary of creatures from the vast and wondrous lands revealed by the Pokédex API. Thy mission, shouldst thou choose to accept this divine calling, is to build a web application upon the sturdy pillars of Next.js 15, utilizing the new commandments of the App Router, the foresight of TypeScript, and the mighty power of Server Actions.
Herein lies the endeavor:

Acquire the Sacred Data: Thou shalt venture forth to the digital domain of the Pokédex API (Link | Docs) and, using the ordained methods, fetch information regarding these creatures, the Pokémon.
Validate the Truth: From the fetched data, thou shalt discern the relevant truths—the creature's name, its elemental types, its wondrous abilities, and any other data deemed worthy. Let the mighty Zod stand as guardian, validating the integrity of this incoming knowledge against thy defined schema.
Store the Acquired Knowledge: This is where thy craft shall shine brightest! Thou shalt not merely gaze upon the data, but shall persist it. Utilizing the holy covenant of Prisma and the power of Server Actions, thou shalt store this validated Pokémon data within a steadfast Free PostgreSQL database.
Retrieve and Order the Bestiary: Once stored, thou shalt, through the grace of Server Actions or server components and the wisdom of Prisma, retrieve this knowledge from thy database. Let it be known! The display shall not come directly from the initial fetch, but from the knowledge thou hast made thine own within the database. Categorize these creatures based upon their elemental types (Water, Fire, Grass, Electric, etc.), grouping them for clarity.
Render the Glorious Compendium: Present this ordered bestiary unto us within the confines of thy Next.js application. Let the user interface be adorned with the elegant components provided by Shadcn/UI, displaying each category and the names of the Pokémon residing therein.

The Sacred Tools Thou Shalt Wield:
Next.js 15 (App Router): The very foundation upon which thy edifice shall rest.
TypeScript: The language of precision and foresight, guiding thee away from unforeseen errors.
Server Actions: The conduits of power, enabling direct communion between the client's desires and the server's capabilities, particularly for data persistence and retrieval.
Free PostgreSQL Database: Choose thy vessel for storing the sacred knowledge—be it Supabase, Neon, or another of thy choosing, so long as it is PostgreSQL and freely accessible for this test.
Prisma ORM: The bridge between thy code and the database, simplifying the handling of data.
Zod: The guardian of data integrity, ensuring that only truthful data is processed and stored.
Shadcn/UI: The aesthetic raiment for thy creation, providing well-crafted components for the user interface.
Other libraries as deemed necessary: Shouldst thou require additional aid for tasks not explicitly covered by these tools (e.g., fetching libraries), utilize them wisely.

The Commandments Thou Shalt Follow:
Build upon the foundations of Next.js 15 App Router with TypeScript.
Utilize Server Actions for handling the fetching of data (though the initial fetch might occur elsewhere, the persistence and retrieval for display from the DB must involve Server Actions or server components querying via Prisma).
Implement Zod for data validation upon fetching from the external API.
Connect unto a Free PostgreSQL database and use Prisma to define thy schema and interact with the database for storing and retrieving Pokémon data.
Structure thy code with wisdom, employing functions, components, and Server Actions in a manner that is readable and maintainable.
Let thy code be well-commented, explaining the purpose of thy functions and the intricacies of thy logic. Adhere to best practices in TypeScript and Next.js development.
Ensure the application successfully fetches data, validates it, stores it in the database, retrieves it from the database, categorizes it by type, and displays it using Shadcn/UI components.
