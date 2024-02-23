package cloud.app.project.server.controller

import cloud.app.project.server.model.CurrentAsset
import cloud.app.project.server.service.CurrentAssetService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/currentAsset")
class CurrentAssetController {
    @Autowired
    private lateinit var currentAssetService: CurrentAssetService

    @GetMapping
    fun getAll(): List<CurrentAsset> {
        return currentAssetService.getAllCurrentAsset()
    }
}