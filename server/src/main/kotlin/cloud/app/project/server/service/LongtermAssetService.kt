package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.model.LongtermAsset
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import cloud.app.project.server.repository.LongtermAssetRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class LongtermAssetService {
    @Autowired
    private lateinit var longtermAssetRepo: LongtermAssetRepo

    fun getAllLongtermAsset(): List<LongtermAsset> {
        return longtermAssetRepo.findAll()
    }
}