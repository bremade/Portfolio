package model

type BlogResponse struct {
    Posts           []BlogPost    `json:"posts"`
}

type BlogPost struct {
    Id              string      `json:"id"`
    Title           string      `json:"title"`
    FeatureImage    string      `json:"feature_image"`
    PublishedAt     string      `json:"published_at"`
    Url             string      `json:"url"`
    Abstract        string      `json:"excerpt"`
    Author          BlogAuthor  `json:"primary_author"`
}

type BlogAuthor struct {
    Name            string      `json:"name"`
    ProfileImage    string      `json:"profile_image"`
}