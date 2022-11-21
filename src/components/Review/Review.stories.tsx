import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Review } from "./Review";

export default {
  title: "Components/Review",
  component: Review,
} as ComponentMeta<typeof Review>;

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const Default = Template.bind({});
