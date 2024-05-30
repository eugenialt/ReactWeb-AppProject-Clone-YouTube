export interface Video{
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    categoryId: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    medium: {
      url: string;
    };
    url: string;
  };
  statistics: {
    viewCount: string;
  };
}