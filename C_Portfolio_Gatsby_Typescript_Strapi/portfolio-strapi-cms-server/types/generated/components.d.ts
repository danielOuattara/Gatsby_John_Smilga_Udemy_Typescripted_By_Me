import type { Schema, Attribute } from '@strapi/strapi';

export interface DescriptionJobDescription extends Schema.Component {
  collectionName: 'components_description_job_descriptions';
  info: {
    displayName: 'job_description';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    item: Attribute.String & Attribute.Required;
  };
}

export interface DescriptionStackItems extends Schema.Component {
  collectionName: 'components_description_stack_items';
  info: {
    displayName: 'stack_items';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'description.job-description': DescriptionJobDescription;
      'description.stack-items': DescriptionStackItems;
    }
  }
}
