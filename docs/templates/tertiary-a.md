# Tertiary A Page

[[toc]]

## Overview

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aliquam reprehenderit delectus eos soluta facere excepturi inventore provident impedit quod nemo qui explicabo, earum, ipsum deserunt. Sapiente illum expedita magnam.

<img :src="$withBase('/screenshots/tertiary-a.png')" alt="Secondary landing page screenshot">

## Folder Structure

```
.
├─ Tertiary A Page Title
│  ├─ Feature
│  └─ Content-Blocks
│  └─ Resources
```

## Feature

The feature is the main section at the top of the primary landing page. Only one feature can be displayed on the page, but the Feature folder can contain multiple

### Add a Feature
<Feature-Add />

### Edit a Feature
<Feature-Edit />

### Feature Fields
<Feature-Fields />

## Content Blocks

The primary landing page contains a heading above the cards section that is meant to be customized on each of the pages. Unlike the feature and cards, this heading can be edited using the more traditional Kentico approach of checking the page out. From the admin panel, navigate to the page you'd like to update.

### Add a Content Block
<ContentBlock-Add />

### Edit a Content Block
<ContentBlock-Edit />

### Content Block Fields
<ContentBlock-Fields />

## Resources

The cards section represents links to the secondary pages that are nested the current primary landing page. For example, The "About" primary landing page would contain a card linking to "About/Ohio-Hospitals", as it is directly below the "About" page. These cards

### Add a Resource
<Resource-Add />

### Edit a Resource
<Resource-Edit />

### Resource Fields
<Resource-Fields />
