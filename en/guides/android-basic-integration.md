Steps for basic integration of the Android SDK.

### 1. Configure App
Start by configuring the links on the website and generate an API KEY. Find more details [here](/guides/dashboard-config-link-behaviour)

### 2. Integrate SDK 

Add to libs.versions.toml

```yaml
[versions]
apparitionSdk = "latest"

[libraries]
apparition-sdk = { module = "link.apparition:sdk-android", version.ref = "apparitionSdk" }
```

In module builds.gradle.kts, add the dependency;

```kotlin
dependencies {
    implementation(libs.apparition.sdk)
}
```

Sync your project with Gradle files.

### 3. Initialize SDK

```kotlin
class MyApp : Application() {

    override fun onCreate() {
        super.onCreate()

        ApparitionLinkSDK.apply {
            init("my_api_key")
            setLogLevel(ApLogLevel.DEBUG)
        }
    }
}

class MainActivity : ComponentActivity() {
    // .....

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        val url = intent.... // retrieve url from deeplink
        
        lifecycleScope.launch {
            repeatOnLifecycle(Lifecycle.State.RESUMED) {
                expandUrl(url)
            }
        }
    }

    private suspend fun expandUrl(url: String) {
        kotlin.runCatching {
            ApparitionLinkSDK.expand(url)
        }.onSuccess { jsonString ->
            // handle success
        }.onFailure {
            // handle failure
        }
    }
}
```

### 4. Minification and obfuscation

If the project is [minified or obfuscated](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-native-distribution.html#minification-and-obfuscation) then the following proguard rule must be included;

```
-keep class * extends androidx.room.RoomDatabase { <init>(); }
```