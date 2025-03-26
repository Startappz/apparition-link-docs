Steps for basic integration of the iOS SDK.

### 1. Configure App
Start by configuring the links on the website and generate an API KEY. Find more details [here](/guides/dashboard-config-link-behaviour)

### 2. Integrate SDK 

1. From xcode main menu, tap on File and select `Add Package Dependencies...`
2. Enter package URL and add package.
<img width="640" alt="image" src="https://github.com/user-attachments/assets/e6881837-c496-43f6-a912-5373a4cafe82" />

### 3. Initialize SDK

In the app delegate, initialize the SDK

```swift
ApparitionLinkSDK.shared.doInit(apiKey: "my_api_key")
```

```swift
func handleDeeplink(url: String) {
    Task { @MainActor in
        do {
            let result = try await ApparitionLinkSDK.shared.expand(url: url)
        } catch {
            // handle exception
        }
    }
}
```
