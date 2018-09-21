# Secondary Landing Page

[[toc]]

## Overview

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aliquam reprehenderit delectus eos soluta facere excepturi inventore provident impedit quod nemo qui explicabo, earum, ipsum deserunt. Sapiente illum expedita magnam.

<img :src="$withBase('/screenshots/secondary-landing.png')" alt="Secondary landing page screenshot">

## Folder Structure

```
.
├─ Secondary Landing Page Title
│  ├─ Feature
│  └─ Cards
```

## Feature

The feature is the main section at the top of the primary landing page. Only one feature can be displayed on the page, but the Feature folder can contain multiple

### Add a Feature
<Feature-Add />

### Edit a Feature
<Feature-Edit />

### Feature Fields
<Feature-Fields />

## Cards Header

The primary landing page contains a heading above the cards section that is meant to be customized on each of the pages. Unlike the feature and cards, this heading can be edited using the more traditional Kentico approach of checking the page out. From the admin panel, navigate to the page you'd like to update.

## Cards

The cards section represents links to the secondary pages that are nested the current primary landing page. For example, The "About" primary landing page would contain a card linking to "About/Ohio-Hospitals", as it is directly below the "About" page. These cards

### Add a Card
<Card-Add />

### Edit a Card
<Card-Edit />

### Card Fields
<Card-Fields />

## Additional Notes
::: tip
This template displays a "Contacts" section on the page. To see how to add contacts to a page, [click here](../guide/adding-contacts.html).
:::