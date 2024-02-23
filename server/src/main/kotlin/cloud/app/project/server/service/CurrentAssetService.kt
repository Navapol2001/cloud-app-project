package cloud.app.project.server.service

import cloud.app.project.server.model.AmountCreditTrackingView
import cloud.app.project.server.model.CurrentAsset
import cloud.app.project.server.repository.AmountCreditTrackingViewRepo
import cloud.app.project.server.repository.CurrentAssetRepo
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CurrentAssetService {
    @Autowired
    private lateinit var currentAssetRepo: CurrentAssetRepo

    fun getAllCurrentAsset(): List<CurrentAsset> {
        return currentAssetRepo.findAll()
    }
}