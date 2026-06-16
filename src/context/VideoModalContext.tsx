import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface VideoModalContextValue {
  isOpen: boolean;
  title: string;
  description: string;
  videoUrl: string;
  openModal: (videoUrl: string, title: string, description: string) => void;
  closeModal: () => void;
}

const VideoModalContext = createContext<VideoModalContextValue | null>(null);

export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = useCallback((url: string, modalTitle: string, desc: string) => {
    setVideoUrl(url);
    setTitle(modalTitle);
    setDescription(desc);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  const value = useMemo(
    () => ({ isOpen, title, description, videoUrl, openModal, closeModal }),
    [isOpen, title, description, videoUrl, openModal, closeModal],
  );

  return <VideoModalContext.Provider value={value}>{children}</VideoModalContext.Provider>;
}

export function useVideoModal() {
  const ctx = useContext(VideoModalContext);
  if (!ctx) throw new Error("useVideoModal must be used within VideoModalProvider");
  return ctx;
}
