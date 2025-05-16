export const getTitleFromPath = (path: string) => {
  switch (true) {
    case path === "/setting":
      return "Settings";

    case path.startsWith("/setting/general"):
      return "General";

    case path.startsWith("/setting/notification"):
      return "Notifications";

    case path.startsWith("/setting/security"):
      return "Security";

    default:
      return "Settings";
  }
};
