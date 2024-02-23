package cloud.app.project.server.service

import cloud.app.project.server.model.LongtermAsset
import cloud.app.project.server.model.OtherAsset
import cloud.app.project.server.repository.LongtermAssetRepo
import cloud.app.project.server.repository.OtherAssetRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class OtherAssetService {
    @Autowired
    private lateinit var otherAssetRepo: OtherAssetRepo

    fun getAllOtherAsset(): List<OtherAsset> {
        return otherAssetRepo.findAll()
    }
}