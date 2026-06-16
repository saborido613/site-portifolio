const YOUTUBE_REGEX =
  /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;

export function getYouTubeId(url: string): string | null {
  const match = url.match(YOUTUBE_REGEX);
  return match?.[1] ?? null;
}

export function isLocalVideo(url: string): boolean {
  return url.endsWith(".mp4") || url.includes("/Videos/");
}

export function isExternalPlatform(url: string): boolean {
  return url.includes("instagram.com") || url.includes("globoplay");
}

export function getExternalPlatformLabel(url: string): { platform: string; btnText: string } {
  if (url.includes("instagram.com")) {
    return { platform: "Instagram Reels", btnText: "Assistir no Instagram" };
  }
  if (url.includes("globoplay")) {
    return { platform: "Globoplay", btnText: "Assistir no Globoplay" };
  }
  return { platform: "Plataforma Externa", btnText: "Assistir no Link Oficial" };
}
