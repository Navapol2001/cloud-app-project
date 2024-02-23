package cloud.app.project.server.model

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "other_asset")
data class OtherAsset (
    @Id
    val accounting_id: String,
    val accounting_name: String,
    val assets_type: String,
    val amount: Double
)