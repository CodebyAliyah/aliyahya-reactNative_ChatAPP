package com.techat

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen  // ✅ Fixed Import

class MainActivity : ReactActivity() {
    override fun getMainComponentName(): String = "Techat"

    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this)  // ✅ Fixed usage
        super.onCreate(savedInstanceState)
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
