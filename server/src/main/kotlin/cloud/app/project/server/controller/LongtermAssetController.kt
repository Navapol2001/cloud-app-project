package cloud.app.project.server.controller

import cloud.app.project.server.model.LongtermAsset
import cloud.app.project.server.service.LongtermAssetService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/longtermAsset")
class LongtermAssetController {
    @Autowired
    private lateinit var longtermAssetService: LongtermAssetService

    @GetMapping
    fun getAll(): List<LongtermAsset> {
        return longtermAssetService.getAllLongtermAsset()
    }
}