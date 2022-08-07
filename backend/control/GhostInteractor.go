package control

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"github.com/bremade/Portfolio/model"
)

func RetrieveBlogPosts(key string) (model.BlogResponse, error) {
	ghostUrl := fmt.Sprintf("https://blog.bremauer.cc/ghost/api/v3/content/posts?key=%s&include=authors", key);

	req, err := http.NewRequest(http.MethodGet, ghostUrl, nil)
	if err != nil {
		return model.BlogResponse{}, err
	}

	query := req.URL.Query()
	req.URL.RawQuery = query.Encode()

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return model.BlogResponse{}, err
	}
	defer resp.Body.Close()

	var body model.BlogResponse
	if err = json.NewDecoder(resp.Body).Decode(&body); err != nil {
		return model.BlogResponse{}, err
	}

	return body, nil
}

func GetRandomPosts(posts []model.BlogPost, postCount int) (model.BlogResponse, error) {
	var randomPosts []model.BlogPost;
	if (len(posts) == 0) {
	  return model.BlogResponse{Posts: randomPosts}, nil;
	}
	var postIds []string;
	for _, post := range posts {
		postIds = append(postIds, post.Id)
	}
  
	if (postCount > len(postIds)) {
		postCount = len(postIds)
	}

	rand.Seed(time.Now().UnixNano())
	rand.Shuffle(len(postIds), func(i, j int) { postIds[i], postIds[j] = postIds[j], postIds[i] })
  
	for i := 0; i < postCount; i++ {
		for _, post := range posts {
			if (post.Id == postIds[i]) {
				randomPosts = append(randomPosts, post)
			}
		}
	}
  
	return model.BlogResponse{Posts: randomPosts}, nil;
  }