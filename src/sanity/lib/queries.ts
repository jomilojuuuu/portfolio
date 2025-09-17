import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export async function getProjects() {
  const query = `*[_type == "project"]{
    _id,
    title,
    description,
    tools,
    "liveUrl": url,
    "imageUrl": image.asset->url
  }`;
  return await client.fetch(query);
}

export async function getSkills() {
  const query = `*[_type == "skill"]{
    _id,
    name,
    image
  }`;

  const skills = await client.fetch(query);

  return skills.map((skill: Skill) => ({
    ...skill,
    imageUrl: skill.image ? urlFor(skill.image).url() : null,
  })) as SkillWithImageUrl[];
}

// Add type definitions if not already imported
type Skill = {
  _id: string;
  name: string;
  image: object;
};

type SkillWithImageUrl = Skill & {
  imageUrl: string | null;
};
