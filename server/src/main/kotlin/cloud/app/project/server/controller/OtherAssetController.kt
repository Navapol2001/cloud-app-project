package cloud.app.project.server.controller

import cloud.app.project.server.model.OtherAsset
import cloud.app.project.server.service.OtherAssetService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/otherAsset")
class OtherAssetController {
    @Autowired
    private lateinit var otherAssetService: OtherAssetService

    @GetMapping
    fun getAll(): List<OtherAsset> {
        return otherAssetService.getAllOtherAsset()
    }
}