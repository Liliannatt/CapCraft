# CapCraft
Welcome to our language learning platform! Our project aims to facilitate language acquisition through media immersion. By providing tools to translate subtitles and lyrics automatically, we empower learners not only to consume but also to understand content in foreign languages.

## Features
Here is a list of the features we are offering:
- **Video and Music with Subtitles and Lyrics**: Enjoy a variety of multimedia content with subtitles and lyrics that synchronize with the timeline.
- **Automatic Translation**: Our platform automatically translates subtitles and lyrics, synchronizing them with the timeline for seamless understanding.
- **Favorite Content**: Save your favorite videos and music for easy access.
- **Profile Customization**: Edit your profile name and picture to personalize your learning experience.
- **Direct Messaging**: Reach out to us directly through the landing page. Simply provide your name, email, and message, and we'll get back to you promptly.

### Vue.js
- Reactive UI for an interactive user experience.
- Component-based architecture and Vue Router for seamless navigation.
- Dynamic data management with Pinia
- Element Plus is used for our UI (User-visible component library written by others) [Element Plus](https://element-plus.org/en-US/component/overview.html)

## APIs
- **Rapid Translate Multi Traduction**: Empowers our platform with robust translation capabilities. [Translate API Documentation](https://rapidapi.com/sibaridev/api/rapid-translate-multi-traduction) Only 50 request per day.
- **Spotify API**: Enhances the music experience by integrating with Spotify for access to a vast library of songs and lyrics. [Spotify API Documentation 1](https://developer.spotify.com/documentation/web-playback-sdk), [Spotify API Documentation 2](https://rapidapi.com/Glavier/api/spotify23)

## Data
- The application uses Spotify data to search and obtain music information, including song title, artist, pre-play link, and lyrics information.
- User data includes favorite videos and music, user avatar and username.
- All user data is stored in Firebase.
- Firebase provides a secure hash of your login information.

## Live Demo
Experience CapCraft on the website：[CapCraft](https://vt24-project-group27.firebaseapp.com/)

## File Structure

```
📂 src
├── 📄 App.tsx                                  # Main  component entry file
├── 📂 api                                      # API request related files
│   ├── 📄 index.ts                             # API request entry file
│   ├── 📄 music.ts                             # Music related API requests
│   └── 📄 translate.ts                         # Translation related API requests
├── 📂 components                               # Reusable components
│   ├── 📂 Card                                 # Card components
│   │   ├── 📄 MusicCard.vue                    # Music card component
│   │   └── 📄 VideoCard.vue                    # Video card component
│   ├── 📂 Feedback                             # Feedback components
│   │   └── 📄 FeedbackIndex.vue                # Feedback main component
│   ├── 📂 Icons                                # Icon components
│   │   ├── 📄 BackIcon.vue                     # Back icon component
│   │   ├── 📄 ExitIcon.vue                     # Exit icon component
│   │   ├── 📄 FavoriteIcon.vue                 # Favorite icon component
│   │   ├── 📄 GoogleIcon.vue                   # Google icon component
│   │   ├── 📄 HomeIcon.vue                     # Home icon component
│   │   ├── 📄 LikeIcon.vue                     # Like icon component
│   │   ├── 📄 LogoIcon.vue                     # Logo icon component
│   │   ├── 📄 MusicIcon.vue                    # Music icon component
│   │   ├── 📄 PlayIcon.vue                     # Play icon component
│   │   ├── 📄 PlayMusicIcon.vue                # Play music icon component
│   │   ├── 📄 ProfileIcon.vue                  # Profile icon component
│   │   ├── 📄 SelectIcon.vue                   # Select icon component
│   │   └── 📄 VideoIcon.vue                    # Video icon component
│   ├── 📂 Layout                               # Layout components
│   │   └── 📄 LayoutIndex.vue                  # Layout main component
│   ├── 📂 Login                                # Login components
│   │   └── 📄 LoginIndex.vue                   # Login main component
│   ├── 📂 Reset                                # Reset password components
│   │   └── 📄 ResetIndex.vue                   # Reset password main component
│   └── 📂 SignUp                               # Sign-up components
│       └── 📄 SignUpIndex.vue                  # Sign-up main component
├── 📂 firebase                                 # Firebase configuration
│   └── 📄 init.ts                              # Firebase initialization file
├── 📄 main.ts                                  # Application entry file
├── 📂 model                                    # Data models
│   ├── 📄 musicModel.ts                        # Music data model
│   ├── 📄 userModel.ts                         # User data model
│   └── 📄 videoModel.ts                        # Video data model
├── 📂 presenter                                # Logic and business layer
│   ├── 📄 VideoIndexPresenter.ts               # Video index presentation logic
│   ├── 📄 favoritePresenter.ts                 # Favorite presentation logic
│   ├── 📄 homePresenter.ts                     # Home page presentation logic
│   ├── 📄 layoutIndexPresenter.ts              # Layout presentation logic
│   ├── 📄 loginPresenter.ts                    # Login presentation logic
│   ├── 📄 musicDetailsPresenter.ts             # Music details presentation logic
│   ├── 📄 resetPresenter.ts                    # Reset password presentation logic
│   ├── 📄 signUpPresenter.ts                   # Sign-up presentation logic
│   ├── 📄 videoDetailsPresenter.ts             # Video details presentation logic
│   └── 📄 videoCardPresenter.ts                # Video card presentation logic
├── 📂 router                                   # Routing configuration
│   ├── 📄 index.ts                             # Routing entry file
│   └── 📄 routes.ts                            # Route definitions file
├── 📂 styles                                   # Style files
│   ├── 📄 cardStyles.less                      # Card styles
│   ├── 📄 favoriteStyles.less                  # Favorite styles
│   ├── 📄 homeIndexStyles.less                 # Home page styles
│   ├── 📄 introductionStyles.less              # Introduction page styles
│   ├── 📄 layoutIndexStyles.less               # Layout styles
│   ├── 📄 loginStyles.less                     # Login page styles
│   ├── 📄 main.css                             # Main stylesheet
│   ├── 📄 musicDetailsStyles.less              # Music details styles
│   ├── 📄 musicStyles.less                     # Music page styles
│   ├── 📄 resetStyles.less                     # Reset password styles
│   ├── 📄 signupStyles.less                    # Sign-up page styles
│   ├── 📄 videoDetailsStyles.less              # Video details styles
│   ├── 📄 videoIndexStyles.less                # Video index page styles
│   └── 📄 videoStyles.less                     # Video page styles
└── 📂 views                                    # View layer
    ├── 📄 FavoriteView.tsx                     # Favorite view
    ├── 📄 HomeIndexView.tsx                    # Home page view
    ├── 📄 IntroductionView.tsx                 # Introduction view
    ├── 📄 LogInView.tsx                        # Login view
    ├── 📄 MusicDetailsView.tsx                 # Music details view
    ├── 📄 MusicView.tsx                        # Music view
    ├── 📄 ResetView.tsx                        # Reset password view
    ├── 📄 SignUpView.tsx                       # Sign-up view
    ├── 📄 VideoDetailsView.tsx                 # Video details view
    └── 📄 VideoIndexView.tsx                   # Video index view
```
We chose to develop our project using the latest versions of TypeScript and Less. Our goal is to leverage the most current front-end development technologies. Additionally, we adhere strictly to the MVP (Model-View-Presenter) architecture in two key ways.

Firstly, we organize the MVP structure in separate files to manage functions and pages efficiently. Secondly, for components, we manage the MVP structure within a single file for each component. This approach is widely recognized by latest industry for its effectiveness in organizing components properly.

Our commitment to these practices ensures our project is well-structured and meet the latestet industry standards.

## Contributors
- William Zhan [wilzha@kth.se](https://gits-15.sys.kth.se/wilzha)
- Tingting Li [tinl@kth.se](https://gits-15.sys.kth.se/tinl)
- Ziang Guo [ziangg@kth.se](https://gits-15.sys.kth.se/ziangg)

