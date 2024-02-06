export default function titleToSlug(title: string) {
  return title.trim().toLowerCase().split(" ").join("-");
}
