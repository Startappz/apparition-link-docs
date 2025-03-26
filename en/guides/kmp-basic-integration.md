Steps for basic integration of the Android SDK.

### 1. Configure App
Start by configuring the links on the website and generate an API KEY. Find more details [here](/guides/dashboard-config-link-behaviour)

### 2. Integrate SDK 

Add to libs.versions.toml

```yaml
[versions]
apparitionSdk = "latest"

[libraries]
apparition-sdk = { module = "link.apparition:sdk", version.ref = "apparitionSdk" }
```

In module builds.gradle.kts, add the dependency;

```kotlin
sourceSets {
  commonMain.dependencies {
    implementation(libs.apparition.sdk)
  }
}
```

Sync your project with Gradle files.

### 3. Initialize SDK

```kotlin
object ApparitionSDKInitializer {

    fun initialize() {
        ApparitionLinkSDK.apply {
            init("my_api_key")
            setLogLevel(ApLogLevel.DEBUG)
        }
    }
}
```

Initialize SDK in Android by calling the SDK initializer in Application class.

```kotlin
class SampleApp : Application() {

    override fun onCreate() {
        super.onCreate()

        ApparitionSdkInitializer.initialize()
    }
}
```

Initialize SDK in iOS by calling the SDK initializer in main app delegate.

```swift
fun MainViewController() = ComposeUIViewController(
    configure = {
        ApparitionSdkInitializer.initialize()
    }
) {
    App()
}
```

Handle deeplink
```kotlin
suspend fun handleDeepLink(url: String) {
    kotlin.runCatching {
        ApparitionLinkSDK.expand(BuildConfig.API_URL)
    }.onSuccess { jsonString ->
        // handle success
    }.onFailure {
        // handle failure
    }
}
```