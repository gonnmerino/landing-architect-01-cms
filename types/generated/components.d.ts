import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'Feature';
    icon: 'emotionHappy';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    FeatureTitle: Schema.Attribute.String;
    Icon: Schema.Attribute.Enumeration<
      ['Window', 'Materials', 'Time', 'Pencil-Ruler', 'Calendar', 'Hat']
    >;
  };
}

export interface SharedImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Images';
    icon: 'landscape';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ShowInCarousel: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.feature': SharedFeature;
      'shared.images': SharedImages;
    }
  }
}
